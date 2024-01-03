variable "AWS_ACCESS_KEY" {
  type        = string
  description = "Access key for AWS"
}
variable "AWS_SECRET_KEY" {
  type        = string
  description = "Secret key for AWS"
}

variable "AWS_REGION" {
  type        = string
  description = "Region where the resources will be created"
}

variable "APP_NAME" {
  type        = string
  description = "Name of the application"
}

variable "APP_TAG" {
  type        = string
  description = "Tag for the application"
}

variable "EC2_INSTANCE_TYPE" {
  type        = string
  description = "Type of EC2 instance to be created"
}

variable "EB_CNAME_PREFIX" {
  type        = string
  description = "Prefix of the CNAME"
}

variable "BUCKET_NAME" {
  type        = string
  description = "Name of the bucket"
}

variable "BUCKET_FILE_KEY" {
  type        = string
  description = "Path to the Dockerrun.aws.json file"
}

variable "DOMAIN_NAME" {
  type        = string
  description = "Domain name for the application"
}

variable "CERTIFICATE_ARN" {
  type        = string
  description = "ARN of the certificate"
}

variable "RESEND_API_KEY" {
  type        = string
  description = "API key for the Resend service"
}
