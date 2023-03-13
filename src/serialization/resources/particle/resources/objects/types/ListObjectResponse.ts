/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { Attio } from "@fern-api/attio";
import * as core from "../../../../../../core";

export const ListObjectResponse: core.serialization.ObjectSchema<
    serializers.particle.ListObjectResponse.Raw,
    Attio.particle.ListObjectResponse
> = core.serialization.object({
    data: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("../../../../..")).particle.AttioObject)
    ),
});

export declare namespace ListObjectResponse {
    interface Raw {
        data: serializers.particle.AttioObject.Raw[];
    }
}