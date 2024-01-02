resource "aws_elastic_beanstalk_application" "portfolio_eb" {
  name        = var.APP_NAME
  description = "Personal portfolio website"

  tags = {
    Name = var.APP_TAG
  }
}

resource "aws_elastic_beanstalk_environment" "portfolio_eb_env" {
  name                = var.APP_NAME
  description         = "Application environment for the portfolio website"
  cname_prefix        = var.EB_CNAME_PREFIX
  application         = aws_elastic_beanstalk_application.portfolio_eb.name
  solution_stack_name = "64bit Amazon Linux 2023 v4.1.2 running Docker"
  version_label       = aws_elastic_beanstalk_application_version.portfolio_eb_vol.name

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "InstanceType"
    value     = var.EC2_INSTANCE_TYPE
  }

  setting {
    namespace = "aws:autoscaling:launchconfiguration"
    name      = "IamInstanceProfile"
    value     = aws_iam_instance_profile.ec2_eb_profile.name
  }

  setting {
    namespace = "aws:autoscaling:asg"
    name      = "MinSize"
    value     = "1"
  }

  setting {
    namespace = "aws:autoscaling:asg"
    name      = "MaxSize"
    value     = "1"
  }

  setting {
    namespace = "aws:elasticbeanstalk:environment"
    name      = "EnvironmentType"
    value     = "LoadBalanced"
  }

  setting {
    namespace = "aws:elb:listener:443"
    name      = "SSLCertificateId"
    value     = var.CERTIFICATE_ARN
  }

  setting {
    namespace = "aws:elb:listener:443"
    name      = "ListenerProtocol"
    value     = "HTTPS"
  }

  setting {
    namespace = "aws:elb:listener:443"
    name      = "InstancePort"
    value     = "80"
  }

  tags = {
    Name = var.APP_TAG
  }
}

resource "aws_elastic_beanstalk_application_version" "portfolio_eb_vol" {
  name        = var.APP_NAME
  description = "Application version for the portfolio website"
  application = aws_elastic_beanstalk_application.portfolio_eb.name
  bucket      = aws_s3_bucket.portfolio_bucket.id
  key         = aws_s3_object.Dockerrun_object.id

  tags = {
    Name = var.APP_TAG
  }
}
