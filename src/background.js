import Particles, {ISourceOptions} from "react-tsparticles";
import {loadLinksPreset} from "tsparticles-preset-links";

const Background = () => {

    const options: ISourceOptions = {
        preset: "links",
        background: {
            color: "#FFFFFF",
        },
        particles: {
            color: {
                value: "#000000",
            },
            links: {
                color: "#000000",
            },
        },
    };

    const initialize = (instance) => {
        loadLinksPreset(instance).then(r => r);
    };

    return <Particles id="ts_particles" options={options} init={initialize} />;

}

export default Background;
