import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { AuthController } from "./controller/auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "src/user/user.module";
import * as passport from "passport";
import { JwtStrategy } from "./jwt.strategy";

@Module({
    imports: [UserModule],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule implements NestModule {
    public configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(passport.authenticate("jwt", { session: false }))
            .exclude({ path: "/profiles", method: RequestMethod.GET })
            .forRoutes(
                { path: "/profiles", method: RequestMethod.POST },
                { path: "/profiles", method: RequestMethod.PUT },
            );
    }
}
