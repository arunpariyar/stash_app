import server from './index';

//---- Configurations ----
import CONFIG from './config/config';

server.listen(CONFIG.PORT, () => {
  console.log(`Server running at  ${CONFIG.PORT}`);
});
