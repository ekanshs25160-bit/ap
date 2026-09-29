const fs = require('fs')

fs.writeFileSync('Big_dATA.csv', 'id,name,orderValue\n')

for (i=1;i<=3;i++){
    fs.appendFileSync('Big_dATA.csv', `${i}, username${i}\n`)
}