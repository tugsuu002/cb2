echo 'deploying...'

scp -r -P 25250 ./build www@chatbot.mn:/vm/repo/cloud/

# scp -r -i "~/.ssh/nsp_aws_seoul.pem" ./build ubuntu@ec2-13-124-34-64.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/vm/repo/khanbank_enterprise/