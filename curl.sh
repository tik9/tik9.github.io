$server='http://localhost:port'

adr=postGuestbook;
# head='Content-Type: application/x-www-form-urlencoded';
# var='name=2021&mail=b@&message=ff'

# adr=todate;
head='Content-Type: application/json';
# var='{"content":"2021"}'

var=$(jq -n '{name:"a2", mail:"b@", message:"f f"}')

# echo $var

curl \
  --header "$head" \
  --request POST \
  --data "$var" \
  $server/$adr