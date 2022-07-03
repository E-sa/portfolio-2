import { motion } from "framer-motion";

function Handle() {

    return (
        
        <motion.div
            className="handle-container"
            drag = "y"
            dragConstraints={{left: 0, top: 0, right:0, bottom:0}}
        >
            <div className="handle-rectangle"></div>
            <div className="handle-circle" ></div>
        </motion.div >
        
        )
      
}

export default Handle;
