FROM node:8

WORKDIR /usr/src
COPY $PWD .

CMD ["python", "-m", "SimpleHTTPServer"]
