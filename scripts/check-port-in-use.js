import chalk from "chalk";
import detectPort from "detect-port";

const port = process.env.PORT || "3000";

detectPort(port, (error, availablePort) => {
    if (port !== String(availablePort))
        throw new Error(
            `Port ${port} is already in use. Please use another port.`
        );
    else process.exit(0);
});
