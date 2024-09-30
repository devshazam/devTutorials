pip3 install virtualenv



    # for windows
        python -m venv venv
        .\venv\Scripts\activate
    # for Linux
        virtualenv --python=python3 venv
        source venv/bin/activate

pip3 freeze > requirements.txt

pip3 install -r requirements.txt
