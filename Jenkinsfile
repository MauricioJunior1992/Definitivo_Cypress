pipeline {

    agent any

    stages {
        stage ('Clonar o repositório') {
            steps {
                git branch: 'main', url: 'https://github.com/MauricioJunior1992/Definitivo_Cypress'
            }
        }
        stage ('Instala dependencias') {
            steps {
                bat 'npm install'
            }
        }
        stage ('Executar teste') {
            steps {
                bat '''npm test set: NO_COLOR=1'''
            }
        }
    }
}