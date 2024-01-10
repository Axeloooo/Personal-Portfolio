resource "local_file" "docker_run_config" {
  content  = <<EOF
  {
  "AWSEBDockerrunVersion": "1",
  "Image": {
    "Name": "axeloooo/portfolio",
    "Update": "true"
  },
  "Ports": [
    {
      "ContainerPort": "3000"
    }
  ]
}
EOF
  filename = "Dockerrun.aws.json"
}

data "archive_file" "docker_run" {
  type        = "zip"
  source_file = local_file.docker_run_config.filename
  output_path = "Dockerrun.aws.zip"
}

data "aws_s3_bucket" "portfolio_bucket" {
  bucket = var.BUCKET_NAME
}

resource "aws_s3_object" "Dockerrun_object" {
  bucket = data.aws_s3_bucket.portfolio_bucket.id
  key    = var.BUCKET_FILE_KEY
  source = data.archive_file.docker_run.output_path
}

resource "aws_s3_object" "airline_png" {
  bucket = data.aws_s3_bucket.portfolio_bucket.id
  key    = "portfolio/airline.png"
  source = "../public/airline.png"
}

resource "aws_s3_object" "axel_png" {
  bucket = data.aws_s3_bucket.portfolio_bucket.id
  key    = "portfolio/axel.png"
  source = "../public/axel.png"
}

resource "aws_s3_object" "band_png" {
  bucket = data.aws_s3_bucket.portfolio_bucket.id
  key    = "portfolio/band.png"
  source = "../public/band.png"
}

resource "aws_s3_object" "game_png" {
  bucket = data.aws_s3_bucket.portfolio_bucket.id
  key    = "portfolio/game.png"
  source = "../public/game.png"
}

resource "aws_s3_object" "last_show_png" {
  bucket = data.aws_s3_bucket.portfolio_bucket.id
  key    = "portfolio/last-show.png"
  source = "../public/last-show.png"
}

resource "aws_s3_object" "libcode_png" {
  bucket = data.aws_s3_bucket.portfolio_bucket.id
  key    = "portfolio/libcode.png"
  source = "../public/libcode.png"
}

resource "aws_s3_object" "lotion_png" {
  bucket = data.aws_s3_bucket.portfolio_bucket.id
  key    = "portfolio/lotion.png"
  source = "../public/lotion.png"
}

resource "aws_s3_object" "seuc_website_png" {
  bucket = data.aws_s3_bucket.portfolio_bucket.id
  key    = "portfolio/seuc-website.png"
  source = "../public/seuc-website.png"
}

resource "aws_s3_object" "icon_ico" {
  bucket = data.aws_s3_bucket.portfolio_bucket.id
  key    = "portfolio/favicon.ico"
  source = "../public/favicon.ico"
}
