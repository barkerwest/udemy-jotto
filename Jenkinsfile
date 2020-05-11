pipeline {
  agent any
  environment {
     CI = 'true'
  }
  stages {
    stage ('Stage 1') {
      steps {
          echo 'Hello World!'
      }
    }
    stage ('Stage 2') {
      steps {
          echo 'install npm packages'
          sh '''
              cd jotto
              npm install
              cd ..
              pwd
          '''
      }
    }
    stage ('Stage 3') {
      steps {
          echo 'run tests'
          sh '''
              cd jotto
              npm test
              cd ..
              pwd
          '''
      }
    }
  }
}
