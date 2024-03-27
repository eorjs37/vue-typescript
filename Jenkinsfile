pipeline{
    agent any
    environment{
        repository ="eorjs37/vue-typescript"
        dockerImage = ''
        BUILD_NUMBER ='1.0'
    }
    stages(){
        stage('Building our image'){
            steps(){
                script{
                    dockerImage = docker.build repository + ":$BUILD_NUMBER"
                }
            }
        }
        stage('deploy'){
            steps{
                echo 'deploy'
                sh 'docker container ls --all --quiet --filter "name=web-front"'
            }
        }
    }
}