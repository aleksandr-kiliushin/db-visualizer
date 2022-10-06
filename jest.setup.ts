const { execSync } = require("child_process")

beforeEach(async () => {
  'echo "bash /var/app/init-db.sh" | docker exec -i db-visualizer-db bash;'
})
