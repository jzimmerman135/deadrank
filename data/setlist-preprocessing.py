import pandas as pd
import json
from pprint import pprint

with open('setlist.json', 'r') as file:
    data = json.load(file)

setlists = data['setlists']
setlists.reverse()

rows = []
showno = 0
for show in setlists:
    date = show['eventDate']
    place = show['venue']
    venue = ', '.join([place['name'], place['city']
                      ['name'], place['city']['stateCode']])
    setno = 1
    trackno = 1
    for set_ in show['sets']['set']:
        for song in set_['song']:
            rows.append((showno, date, venue, setno,
                        trackno, song['name'].strip()))
            trackno += 1
        setno += 1
    showno += 1

df = pd.DataFrame(
    rows, columns=['showno', 'date', 'venue', 'setno', 'trackno', 'song'])

df.to_csv('shows.csv')
