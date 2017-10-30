FROM python:3

WORKDIR /usr/src
COPY $PWD .

CMD ["python", "-m", "http.server"]
