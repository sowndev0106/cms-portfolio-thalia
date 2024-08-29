pipeline {
    agent any
    environment {
        ENV = 'DEV'
        DB_URL = 'localhost'
        DB_PORT = '3306'
        DOCKER_HUB_CREDENTIAL = credentials('sowndev-dockerhub')
        ENV_FILE =  credentials('env-develop')
    }
    stages {
        stage('Build and Push Docker Image') {
            steps {
               sh 'pwd'
               withDockerRegistry(credentialsId: 'sowndev-dockerhub', url: 'https://index.docker.io/v1/') {
                    sh 'cp $ENV_FILE .env'
                    sh "printenv"
                    sh 'docker compose build'
                    sh 'docker compose ps'
                    sh 'docker compose push'
                }
            }
        }
        stage('Deploy') {
            steps {
                withCredentials([file(credentialsId: 'ansible_key', variable: 'ansible_key')]) {
                    sh 'ls -la'
                    sh "cp /$ansible_key ansible_key"
                    sh 'cat ansible_key'
                    sh 'ansible --version'
                    sh 'ls -la'
                    sh 'ansible-playbook -i hosts --private-key ansible_key playbook.yml'
                }
            }
        }
    }
    post {
        // Clean after build
        always {
            // cleanWs()
            echo 'Cleaning up workspace'
        }
    }
}