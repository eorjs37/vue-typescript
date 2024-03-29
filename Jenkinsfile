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
                sh '''
                   docker stop web-front
                   docker rm web-front
                   docker run -d --name web-front -v /etc/letsencrypt:/etc/letsencrypt -v /etc/sectigo:/etc/sectigo  -p 443:443 eorjs37/vue-typescript:1.0
                   docker image prune -a --force --filter "until=1h"
                '''
            }
        }
    }
}