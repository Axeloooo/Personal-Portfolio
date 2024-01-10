terraform {
  backend "s3" {
    region = "ca-central-1"
    bucket = "axeloooo-software-bucket"
    key    = "portfolio/state"
  }
}
