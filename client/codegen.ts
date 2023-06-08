
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:8080/graphql',
  documents: [
    // '.src/components/**/*.ts',
    '.src/graphql/query/getUsers.query.ts'
  ],
  generates: {
    'src/generated/graphql.tsx:': {
      // preset: "client",
      plugins: [
        'typescript',
        'typescript-operations',
        'typescrip-react-apollo'
      ],
      config:{
        withHooks: true
      }
    }
  }
};

export default config;
