pipeline {
  agent any
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
  }
}
