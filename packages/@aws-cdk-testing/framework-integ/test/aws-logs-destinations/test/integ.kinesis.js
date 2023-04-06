"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kinesis = require("aws-cdk-lib/aws-kinesis");
const logs = require("aws-cdk-lib/aws-logs");
const aws_cdk_lib_1 = require("aws-cdk-lib");
const integ_tests_alpha_1 = require("@aws-cdk/integ-tests-alpha");
const dests = require("aws-cdk-lib/aws-logs-destinations");
class KinesisEnv extends aws_cdk_lib_1.Stack {
    constructor(scope, id) {
        super(scope, id);
        const stream = new kinesis.Stream(this, 'MyStream');
        const logGroup = new logs.LogGroup(this, 'LogGroup', { removalPolicy: aws_cdk_lib_1.RemovalPolicy.DESTROY });
        const kinesisDestination = new dests.KinesisDestination(stream);
        new logs.SubscriptionFilter(this, 'Subscription', {
            logGroup: logGroup,
            destination: kinesisDestination,
            filterPattern: logs.FilterPattern.allEvents(),
        });
    }
}
const app = new aws_cdk_lib_1.App();
const stack = new KinesisEnv(app, 'kinesis-logsubscription-integ');
// If the proper dependency is not set, then the deployment fails with:
// Resource handler returned message: "Could not deliver test message to specified
// Kinesis stream. Check if the given kinesis stream is in ACTIVE state.
// (Service: CloudWatchLogs, Status Code: 400, Request ID: [...])"
new integ_tests_alpha_1.IntegTest(app, 'KinesisInteg', {
    testCases: [stack],
});
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZWcua2luZXNpcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImludGVnLmtpbmVzaXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBbUQ7QUFDbkQsNkNBQTZDO0FBQzdDLDZDQUF3RDtBQUN4RCxrRUFBdUQ7QUFFdkQsMkRBQTJEO0FBRzNELE1BQU0sVUFBVyxTQUFRLG1CQUFLO0lBQzVCLFlBQVksS0FBMkIsRUFBRSxFQUFVO1FBQ2pELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxNQUFNLEdBQUcsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNwRCxNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLGFBQWEsRUFBRSwyQkFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDL0YsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ2hELFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxrQkFBa0I7WUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFO1NBQzlDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQUVELE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsRUFBRSwrQkFBK0IsQ0FBQyxDQUFDO0FBRW5FLHVFQUF1RTtBQUN2RSxrRkFBa0Y7QUFDbEYsd0VBQXdFO0FBQ3hFLGtFQUFrRTtBQUNsRSxJQUFJLDZCQUFTLENBQUMsR0FBRyxFQUFFLGNBQWMsRUFBRTtJQUNqQyxTQUFTLEVBQUUsQ0FBQyxLQUFLLENBQUM7Q0FDbkIsQ0FBQyxDQUFDO0FBQ0gsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMga2luZXNpcyBmcm9tICdhd3MtY2RrLWxpYi9hd3Mta2luZXNpcyc7XG5pbXBvcnQgKiBhcyBsb2dzIGZyb20gJ2F3cy1jZGstbGliL2F3cy1sb2dzJztcbmltcG9ydCB7IEFwcCwgU3RhY2ssIFJlbW92YWxQb2xpY3kgfSBmcm9tICdhd3MtY2RrLWxpYic7XG5pbXBvcnQgeyBJbnRlZ1Rlc3QgfSBmcm9tICdAYXdzLWNkay9pbnRlZy10ZXN0cy1hbHBoYSc7XG5pbXBvcnQgKiBhcyBjb25zdHJ1Y3RzIGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0ICogYXMgZGVzdHMgZnJvbSAnYXdzLWNkay1saWIvYXdzLWxvZ3MtZGVzdGluYXRpb25zJztcblxuXG5jbGFzcyBLaW5lc2lzRW52IGV4dGVuZHMgU3RhY2sge1xuICBjb25zdHJ1Y3RvcihzY29wZTogY29uc3RydWN0cy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgY29uc3Qgc3RyZWFtID0gbmV3IGtpbmVzaXMuU3RyZWFtKHRoaXMsICdNeVN0cmVhbScpO1xuICAgIGNvbnN0IGxvZ0dyb3VwID0gbmV3IGxvZ3MuTG9nR3JvdXAodGhpcywgJ0xvZ0dyb3VwJywgeyByZW1vdmFsUG9saWN5OiBSZW1vdmFsUG9saWN5LkRFU1RST1kgfSk7XG4gICAgY29uc3Qga2luZXNpc0Rlc3RpbmF0aW9uID0gbmV3IGRlc3RzLktpbmVzaXNEZXN0aW5hdGlvbihzdHJlYW0pO1xuXG4gICAgbmV3IGxvZ3MuU3Vic2NyaXB0aW9uRmlsdGVyKHRoaXMsICdTdWJzY3JpcHRpb24nLCB7XG4gICAgICBsb2dHcm91cDogbG9nR3JvdXAsXG4gICAgICBkZXN0aW5hdGlvbjoga2luZXNpc0Rlc3RpbmF0aW9uLFxuICAgICAgZmlsdGVyUGF0dGVybjogbG9ncy5GaWx0ZXJQYXR0ZXJuLmFsbEV2ZW50cygpLFxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmNvbnN0IHN0YWNrID0gbmV3IEtpbmVzaXNFbnYoYXBwLCAna2luZXNpcy1sb2dzdWJzY3JpcHRpb24taW50ZWcnKTtcblxuLy8gSWYgdGhlIHByb3BlciBkZXBlbmRlbmN5IGlzIG5vdCBzZXQsIHRoZW4gdGhlIGRlcGxveW1lbnQgZmFpbHMgd2l0aDpcbi8vIFJlc291cmNlIGhhbmRsZXIgcmV0dXJuZWQgbWVzc2FnZTogXCJDb3VsZCBub3QgZGVsaXZlciB0ZXN0IG1lc3NhZ2UgdG8gc3BlY2lmaWVkXG4vLyBLaW5lc2lzIHN0cmVhbS4gQ2hlY2sgaWYgdGhlIGdpdmVuIGtpbmVzaXMgc3RyZWFtIGlzIGluIEFDVElWRSBzdGF0ZS5cbi8vIChTZXJ2aWNlOiBDbG91ZFdhdGNoTG9ncywgU3RhdHVzIENvZGU6IDQwMCwgUmVxdWVzdCBJRDogWy4uLl0pXCJcbm5ldyBJbnRlZ1Rlc3QoYXBwLCAnS2luZXNpc0ludGVnJywge1xuICB0ZXN0Q2FzZXM6IFtzdGFja10sXG59KTtcbmFwcC5zeW50aCgpO1xuIl19