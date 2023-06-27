export const useCreateSticky = () =>
     useSWRMutation(
         `/api/sticky`,
                 // The typing looks more complex than it is
                 // We essentially grab the types of the first argument 
                 // of the createSticky function so we can pass it on
         (_, { arg }: { arg: Parameters<typeof createSticky>[0] }) =>
             createSticky(arg)
     );