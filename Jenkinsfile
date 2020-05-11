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
          echo 'test npm!'
          sh '''
              cd jotto
              pwd
              cd ..
              pwd
          '''
      }
    }
  }
}
