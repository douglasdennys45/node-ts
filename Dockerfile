FROM golang:1.17-alpine as builder
LABEL maintainer="Douglas Dennys <douglasdennys@yahoo.com>"
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN go build ./lib/infrastructure/server/app.go

FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/
COPY --from=builder /app/app .
EXPOSE 8080
CMD ["./app"]