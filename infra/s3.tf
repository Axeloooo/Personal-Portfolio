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

resource "aws_s3_bucket" "portfolio_bucket" {
  bucket = var.BUCKET_NAME

  tags = {
    Name = "Software development bucket"
  }
}

resource "aws_s3_object" "Dockerrun_object" {
  key    = var.BUCKET_FILE_KEY
  bucket = aws_s3_bucket.portfolio_bucket.id
  source = data.archive_file.docker_run.output_path
}
