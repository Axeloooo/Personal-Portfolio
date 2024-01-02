resource "aws_iam_instance_profile" "ec2_eb_profile" {
  name = "ec2-profile"
  role = aws_iam_role.ec2_eb_role.name

  tags = {
    Name = var.APP_TAG
  }
}

resource "aws_iam_role" "ec2_eb_role" {
  name = "ec2-eb-role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF

  managed_policy_arns = [
    "arn:aws:iam::aws:policy/AWSElasticBeanstalkWebTier",
    "arn:aws:iam::aws:policy/AWSElasticBeanstalkWorkerTier",
  ]

  tags = {
    Name = var.APP_TAG
  }
}

resource "aws_iam_policy" "ec2_eb_policy" {
  name = "ec2-eb-policy"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "s3:*"
      ],
      "Effect": "Allow",
      "Resource": "*"
    }
  ]
}
EOF

  tags = {
    Name = var.APP_TAG
  }
}

resource "aws_iam_role_policy_attachment" "ec2_eb_role_policy_attachment" {
  role       = aws_iam_role.ec2_eb_role.name
  policy_arn = aws_iam_policy.ec2_eb_policy.arn
}
