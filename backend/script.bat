echo "Criando as imagens..."

docker build -t relife-web .

echo "Subindo os containers com docker-compose..."

docker-compose up -d

echo "Finalizado!"