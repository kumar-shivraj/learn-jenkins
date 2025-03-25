pipeline {
    agent any
    stages {
        stage('Build') {
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
                echo "Installing dependencies..."
                npm ci
                echo "Building application..."
                npm run build
                ls -al
                '''
            }
        }
    }
}
