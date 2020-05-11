pipeline {
  agent any
  stages {
    stage ('Stage 1') {
      steps {
          echo 'Hello World!'
      }
    }
    stage ('Install npm packages') {
      steps {
          cd jotto
          npm list
          cd ..
      }
    }
  }
}
