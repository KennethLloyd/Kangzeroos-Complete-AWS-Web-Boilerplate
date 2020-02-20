import { CognitoUserPool } from 'amazon-cognito-identity-js';
import 'amazon-cognito-js'


const REGION = 'ap-southeast-1'
const USER_POOL_ID = 'ap-southeast-1_ffLhadnAG'
const CLIENT_ID = '4u2gab7fpj00l5kdteosg6tqnh'

AWS.config.update({
	region: REGION
})
const userData = {
    UserPoolId : USER_POOL_ID,
    ClientId : CLIENT_ID
}

export const BUCKET_NAME = 'kangzeroo-complete-aws-tutorial-pics'
export const userPool = new CognitoUserPool(userData);
export const USERPOOL_ID = 'cognito-idp.'+REGION+'.amazonaws.com/'+USER_POOL_ID; //URL required in some Cognito functions
export const IDENTITY_POOL_ID = 'ap-southeast-1:1fba4c23-8fdb-4686-bc99-c1bed6268627'; //Federated Identity Pool ARN
