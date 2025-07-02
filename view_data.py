import sqlite3

conn = sqlite3.connect('subscribers.db')
c = conn.cursor()

c.execute('SELECT * FROM subscribers')
rows = c.fetchall()

for row in rows:
    print(row)

conn.close()
