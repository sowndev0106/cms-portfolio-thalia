pipeline {
    agent any
    environment {
        ENV = 'DEV'
        DB_URL = 'localhost'
        DB_PORT = '3306'
        DOCKER_HUB_CREDENTIAL = credentials('sowndev-dockerhub')

    }
    stages {
        stage('Build') {
            steps {
                echo 'All ENV'
                echo printenv
                echo DOCKER_HUB_CREDENTIAL
                echo DOCKER_HUB_CREDENTIAL_USR
                echo DOCKER_HUB_CREDENTIAL_PSW
            }
        }
        stage('Test') {
            steps {
                echo 'Testing.. Update'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying.... Update'
            }
        }
    }
}