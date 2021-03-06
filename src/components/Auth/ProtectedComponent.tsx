import * as React from "react";
import {Center, VStack, Box, Button} from "@chakra-ui/react";
import {useProtectedMutation, UserResponse} from "../../app/services/auth";

export function ProtectedComponent() {

    const [attemptAccess, {data, error, isLoading}] = useProtectedMutation();

    return (
        <Center h="100px" w="400px">
            <VStack>
                <Box>
                    <Button onClick={(e) => {
                        attemptAccess(e).then((r) => console.log(r))
                    }} isLoading={isLoading}>
                        Make an authenticated request
                    </Button>
                </Box>
                <Box>
                    {data ? (
                        <>Data: {JSON.stringify(data)}</>
                    ) : error ? (
                        <>Error: {JSON.stringify(error)}</>
                    ) : null}
                </Box>
            </VStack>
        </Center>
    );
}
