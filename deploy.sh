echo 'deploying...'

scp -r -P 25250 ./dist/* www@chatbot.mn:/vm/repo/cloud/landing
