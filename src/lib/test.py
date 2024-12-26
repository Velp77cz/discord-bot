import requests

url = 'https://gcfm.bakalari.cz/login'
head = {'Content-Type': 'application/x-www-form-urlencoded'}
body = 'client_id=ANDR&grant_type=password&username=Krivy19o2&password=Perlicka2008'

response = requests.post(url, data=body)
token = response.json()['access_token']
print(f'Token: {token}')