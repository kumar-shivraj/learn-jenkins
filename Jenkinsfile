pipeline {
    agent any
    stages {
        stage('Hello') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                ls -al
                pwd
                node --version
                npm --version
                # npm ci is the command to install a project with a `package-lock.json` file
                npm run build
                ls -al
                '''
            }
        }
    }
}
