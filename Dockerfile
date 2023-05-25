FROM public.ecr.aws/lambda/nodejs:18
COPY --from=public.ecr.aws/datadog/lambda-extension:42 /opt/extensions/ /opt/extensions
COPY dist/handler.js dist/device.graphql package.json ./
RUN echo $(ls -lrt ./)
COPY ./npmrcTest ./.npmrc
ENV DD_LAMBDA_HANDLER handler.main
RUN npm config fix
RUN npm install --omit=dev --registry https://gazelle.jfrog.io/artifactory/api/npm/npmvirtual/
CMD [ "node_modules/datadog-lambda-js/dist/handler.handler" ]
