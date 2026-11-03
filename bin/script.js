#!/usr/bin/env node

const { spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const { version } = require('../package.json')

const REPO_URL = 'https://github.com/wubeZ/create-express-ts-starter'
// Clone the tag matching this CLI's version so pushes to main never reach users.
// STARTER_REF lets maintainers test an unreleased branch.
const REF = process.env.STARTER_REF || `v${version}`

// Function to run a command
const runCommand = (command, args, options = {}) => {
  const result = spawnSync(command, args, { stdio: 'inherit', shell: process.platform === 'win32', ...options })
  if (result.status !== 0) {
    console.error(`Failed to execute ${command} ${args.join(' ')}`)
    return false
  }
  return true
}

// Turn the starter's package.json into one that belongs to the new project
const preparePackageJson = (projectDir, projectName) => {
  const pkgPath = path.join(projectDir, 'package.json')
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))

  pkg.name = projectName.toLowerCase()
  pkg.version = '0.1.0'
  pkg.private = true
  pkg.description = ''
  delete pkg.bin
  delete pkg.files
  delete pkg.repository
  delete pkg.keywords
  delete pkg.author

  fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`)
}

const main = () => {
  const projectName = process.argv[2]
  if (!projectName) {
    console.error('Please provide a project name')
    process.exit(1)
  }

  // Validate project name
  const isValidName = /^[a-z0-9](?:[a-z0-9]|-(?=[a-z0-9])){0,98}$/i.test(projectName)
  if (!isValidName) {
    console.error('Invalid project name: use letters, numbers and single dashes')
    process.exit(1)
  }

  // Check if the directory already exists locally
  if (fs.existsSync(projectName)) {
    console.error(`Directory "${projectName}" already exists`)
    process.exit(1)
  }

  console.log(`Creating ${projectName} from create-express-ts-starter@${REF}`)
  if (!runCommand('git', ['clone', '--quiet', '--depth', '1', '--branch', REF, REPO_URL, projectName])) {
    process.exit(1)
  }

  // Remove starter-only files and history
  fs.rmSync(path.join(projectName, '.git'), { recursive: true, force: true })
  fs.rmSync(path.join(projectName, 'bin'), { recursive: true, force: true })
  preparePackageJson(projectName, projectName)

  // Start a fresh git repository (husky needs one during npm install)
  runCommand('git', ['init', '--quiet'], { cwd: projectName })

  console.log('Installing dependencies for the project')
  if (!runCommand('npm', ['install'], { cwd: projectName })) {
    process.exit(1)
  }

  console.log('Congratulations! Your project is ready to go!')
  console.log('To start the project, run the following commands:')
  console.log(`  cd ${projectName}`)
  console.log('  cp .env.example .env')
  console.log('  npm run dev')
}

main()
