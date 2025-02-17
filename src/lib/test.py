import requests

url = 'https://secure.ulrichsw.cz/estrava/prihlaseni/0013'
head = {'Content-Type': 'application/json'}
body = {

    'kodzar': "0013",
    'pass': "pavel",
    'username': "1883"
}

response = requests.post(url, data=body)
token = response.json()['access_token']
print(f'Token: {token}')