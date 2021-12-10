# CNWNC
- install python 3.8.8
- install anaconda
- install postgresql 10.18
- install dbeaver

# Setup Database
restore database DBeaver by dump_cnwnc.bak or dump_cnwnc

# Run Backend Server
- conda create -n fastpi python==3.8.8
- cd CNWNC
- conda activate fastapi
- pip install -r requirment.txt

- cd steamlit/server
- python run.py

# Create new terminal
cd CNWNC/React-Triper-v.1.0-1-Jan-2020/Triper
npm -i
npm start

# Create new terminal 
cd CNWNC/react-soft-ui-dashboard
npm -i
npm start