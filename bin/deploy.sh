#!/bin/bash
set -e

echo "Building site..."
npm run build

echo "Uploading to S3..."
aws s3 sync dist/ s3://jyiv.io --delete

echo "Invalidating CloudFront cache..." # If using CloudFront
aws cloudfront create-invalidation \
  --distribution-id E1YI8140PIWENI \
  --paths "/*"

echo "Deployment complete!"