pipeline {
    agent any
    environment {
        ENV = 'DEV'
        DB_URL = 'localhost'
        DB_PORT = '3306'
        DOCKER_HUB_CREDENTIAL = credentials('sowndev-dockerhub')

    }
    stages {
        stage('Build and Push Docker Image') {
            steps {
               withDockerRegistry(credentialsId: 'sowndev-dockerhub', url: 'https://index.docker.io/v1/') {
                    sh "printenv"
                    sh 'docker compose build'
                    sh 'docker compose ps'
                    sh 'docker compose push'
                  
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying.... Update'
            }
        }
    }
    post {
        // Clean after build
        always {
            cleanWs()
        }
    }
}