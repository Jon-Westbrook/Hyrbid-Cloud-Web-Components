export const products = {
  categories: [
    {
      name: 'AI / machine learning',
      translationId: 'ai',
      description: 'Use Watson’s AI or build your own machine learning models',
      icon: 'https://1.cms.s81c.com/sites/default/files/2019-05-23/product-AI.svg',
      link: '/cloud/ai',
      products: [
        {
          name: 'IBM Watson Assistant',
          longDescription: 'Virtual agents customizable to any domain',
          url: '/products/watson-assistant',
          pricingUrl: '/products/watson-assistant/pricing',
          translationId: 'watsonAssistant',
          external: false,
        },
        {
          name: 'IBM Watson Discovery',
          longDescription:
            'Search and analytics engine that adapts to custom domains',
          url: '/cloud/watson-discovery',
          pricingUrl: '/cloud/watson-discovery/pricing',
          translationId: 'watsonDiscovery',
          external: false,
        },
        {
          name: 'IBM Watson Knowledge Catalog',
          longDescription: 'SaaS for AI data management',
          url: '/cloud/watson-knowledge-catalog',
          pricingUrl: '/cloud/watson-knowledge-catalog/pricing',
          translationId: 'watsonCatalog',
          external: false,
        },
        {
          name: 'IBM Watson Knowledge Studio',
          longDescription:
            'Visual interface to teach Watson domain-specific knowledge',
          url: '/cloud/watson-knowledge-studio',
          pricingUrl: '/cloud/watson-knowledge-studio/pricing',
          translationId: 'watsonKnowledgeStudio',
          external: false,
        },
        {
          name: 'IBM Watson Language Translator',
          longDescription: 'API for translation with domain-specific models',
          url: '/cloud/watson-language-translator',
          pricingUrl: '/cloud/watson-language-translator/pricing',
          translationId: 'watsonLanguageTranslator',
          external: false,
        },
        {
          name: 'IBM Watson Natural Language Classifier',
          longDescription: 'Visual tool and API for text classification',
          url: '/cloud/watson-natural-language-understanding',
          pricingUrl: '/cloud/watson-natural-language-understanding/pricing',
          translationId: 'watsonLanguageClassifier',
          external: false,
        },
        {
          name: 'IBM Watson Natural Language Understanding',
          longDescription: 'API for text analysis and metadata extraction',
          url: '/cloud/watson-natural-language-understanding',
          pricingUrl: '/cloud/watson-natural-language-understanding/pricing',
          translationId: 'watsonLanguageUnderstanding',
          external: false,
        },
        {
          name: 'IBM Watson Speech to Text',
          longDescription:
            'API for real-time speech recognition and transcription',
          url: '/cloud/watson-speech-to-text',
          pricingUrl: '/cloud/watson-speech-to-text/pricing',
          translationId: 'watsonSpeechToText',
          external: false,
        },
        {
          name: 'IBM Watson Studio',
          longDescription: 'IDE to build, run and manage AI models',
          url: '/cloud/watson-studio',
          pricingUrl: '/cloud/watson-studio/pricing',
          translationId: 'watsonStudio',
          external: false,
        },
        {
          name: 'IBM Watson Text to Speech',
          longDescription: 'API for real-time text to speech conversion',
          url: '/cloud/watson-text-to-speech',
          pricingUrl: '/cloud/watson-text-to-speech/pricing',
          translationId: 'watsonTextToSpeech',
          external: false,
        },
      ],
    },
    {
      name: 'Analytics',
      translationId: 'analytics',
      description: 'Aggregate and analyze large datasets',
      icon: 'https://1.cms.s81c.com/sites/default/files/2019-05-23/product-analytics.svg',
      link: '/cloud/analytics',
      products: [
        {
          name: 'IBM Cloud Pak for Data',
          longDescription:
            'Platform that modernizes how businesses manage data to infuse AI.',
          url: '/products/cloud-pak-for-data',
          pricingUrl: null,
          translationId: 'pakData',
          external: false,
        },
        {
          name: 'IBM Analytics Engine',
          longDescription:
            'PaaS to build analytics applications on Apache Spark and Hadoop ',
          url: '/cloud/analytics-engine',
          pricingUrl: '/cloud/analytics-engine/pricing',
          translationId: 'analyticsEngine',
          external: false,
        },
        {
          name: 'IBM Cloud SQL Query',
          longDescription: 'Query tool for IBM Cloud Object Storage',
          url: '/cloud/sql-query',
          pricingUrl: 'https://cloud.ibm.com/catalog/services/sql-query',
          translationId: 'sqlQuery',
          external: false,
        },
        {
          name: 'IBM Db2 Warehouse on Cloud',
          longDescription: 'Managed data warehouse on IBM Cloud or AWS',
          url: '/cloud/db2-warehouse-on-cloud',
          pricingUrl: '/cloud/db2-warehouse-on-cloud/pricing',
          translationId: 'db2Warehouse',
          external: false,
        },
        {
          name: 'IBM InfoSphere® Information Server on Cloud',
          longDescription:
            'Data integration suite for ETL, governance and anlaysis',
          url: '/cloud/information-server',
          pricingUrl: '/cloud/information-server/pricing',
          translationId: 'infosphere',
          external: false,
        },
        {
          name: 'IBM Master Data Management on Cloud',
          longDescription: 'Managed master data storage',
          url: '/cloud/mdm',
          pricingUrl: '/cloud/mdm/pricing',
          translationId: 'mdm',
          external: false,
        },
        {
          name: 'IBM Streaming Analytics',
          longDescription: 'Dashboard for real-time analysis of data streams',
          url: '/cloud/streaming-analytics',
          pricingUrl: '',
          translationId: 'streamingAnalytics',
          external: false,
        },
      ],
    },
    {
      name: 'Automation',
      translationId: 'automation',
      description:
        'Automate workflows from IT operations to business processes',
      icon: 'automation',
      link: '/cloud/automation',
      products: [
        {
          name: 'IBM Cloud Pak for Business Automation',
          longDescription: 'Operations management software with AI insights',
          url: '/cloud/cloud-pak-for-business-automation',
          pricingUrl: '/cloud/cloud-pak-for-business-automation/pricing',
          translationId: 'cloudpakba',
          external: false,
        },
        {
          name: 'IBM Cloud Pak for Integration',
          longDescription: 'Tools to connect all of your apps, data and events',
          url: '/cloud/cloud-pak-for-integration',
          pricingUrl: '/cloud/cloud-pak-for-integration/pricing',
          translationId: 'pakIntegration',
          external: false,
        },
        {
          name: 'IBM Cloud Pak for Network Automation',
          longDescription: 'Management software for telco network operations',
          url: '/cloud/cloud-pak-for-network-automation',
          pricingUrl: '/cloud/cloud-pak-for-network-automation/pricing',
          translationId: 'cloudpakna',
          external: false,
        },
        {
          name: 'IBM Cloud Pak for Watson AIOps',
          longDescription:
            'DevOps management tool with AI analysis and recommendations',
          url: '/cloud/cloud-pak-for-watson-aiops',
          pricingUrl: '/cloud/cloud-pak-for-watson-aiops/pricing',
          translationId: 'watsonAiops',
          external: false,
        },
        {
          name: 'Turbonomic',
          longDescription:
            'Software to automate application resource management and optimize costs',
          url: '/cloud/turbonomic',
          pricingUrl: '',
          translationId: 'turbonomic',
          external: false,
        },
      ],
    },
    {
      name: 'Blockchain',
      translationId: 'blockchain',
      description: 'Build applications on an immutable blockchain ledger',
      icon: 'https://1.cms.s81c.com/sites/default/files/2019-05-23/product-blockchain.svg',
      link: '',
      products: [
        {
          name: 'IBM Blockchain Platform',
          longDescription: 'Blockchain SDK based on Hyperledger Fabric',
          url: '/cloud/blockchain-platform',
          pricingUrl: '/cloud/blockchain-platform/pricing',
          translationId: 'blockchainPlatform',
          external: false,
        },
      ],
    },
    {
      name: 'Compute',
      translationId: 'compute',
      description: 'Run workloads on cloud infrastrcture',
      icon: 'https://1.cms.s81c.com/sites/default/files/2019-05-22/product-compute_0.svg',
      link: '/cloud/compute',
      products: [
        {
          name: 'Cloud Foundry',
          longDescription:
            'PaaS for Java, Node, PHP, Python, Ruby, Swift and Go apps.',
          url: '/cloud/cloud-foundry',
          pricingUrl: '/cloud/cloud-foundry#section-heading-2',
          translationId: 'cloudFoundry',
          external: false,
        },
        {
          name: 'Dizzion Managed DaaS on IBM Cloud',
          longDescription: 'Virtual desktops, in the cloud and managed',
          url: '/cloud/dizzion',
          pricingUrl: '/cloud/dizzion/pricing',
          translationId: 'horizon',
          external: false,
        },
        {
          name: 'IBM Cloud Bare Metal Servers',
          longDescription: 'Dedicated hardware for maximum performance',
          url: '/cloud/bare-metal-servers',
          pricingUrl: 'https://cloud.ibm.com/gen1/infrastructure/provision/bm',
          translationId: 'bareMetal',
          external: false,
        },
        {
          name: 'IBM Cloud Code Engine',
          longDescription: 'Serverless container hosting platform as a service',
          url: '/cloud/code-engine',
          pricingUrl: '/cloud/code-engine/pricing',
          translationId: 'codeEngine',
          external: false,
        },
        {
          name: 'IBM Cloud for VMware Solutions',
          longDescription: 'Hosting for virtualized workloads',
          url: '/cloud/vmware',
          pricingUrl: '/cloud/vmware/pricing',
          translationId: 'vmwareSolutions',
          external: false,
        },
        {
          name: 'IBM Cloud Functions',
          longDescription:
            'Serverless function runtime based on Apache OpenWhisk',
          url: '/cloud/functions',
          pricingUrl: 'https://cloud.ibm.com/functions/learn/pricing',
          translationId: 'cloudFunctions',
          external: false,
        },
        {
          name: 'IBM Cloud Virtual Server for VPC',
          longDescription: 'Virtual servers with enhanced network security',
          url: '/cloud/vpc',
          pricingUrl: '/cloud/vpc/pricing',
          translationId: 'vpc',
          external: false,
        },
        {
          name: 'IBM Cloud VPS Hosting',
          longDescription: 'Easily manage fast-moving workloads.',
          url: '/cloud/vps',
          pricingUrl: '/cloud/vps',
          translationId: 'vpsHosting',
          external: false,
        },
        {
          name: 'IBM Cloud Virtual Servers for Classic Infrastructure',
          longDescription:
            'Virtual servers with the most flexible configuration options',
          url: '/cloud/virtual-servers',
          pricingUrl: '/cloud/virtual-servers/pricing',
          translationId: 'virtualServers',
          external: false,
        },
        {
          name: 'IBM Hyper Protect Virtual Servers',
          longDescription: 'Virtual servers for workloads with sensitive data',
          url: '/cloud/hyper-protect-virtual-servers',
          pricingUrl: '/cloud/hyper-protect-virtual-servers/pricing',
          translationId: 'hyperProtectVirtualServers',
          external: false,
        },
        {
          name: 'IBM Power Systems Virtual Servers',
          longDescription: 'Virtual servers with IBM POWER processors',
          url: '/products/power-virtual-server',
          pricingUrl:
            'https://cloud.ibm.com/catalog/services/power-systems-virtual-server',
          translationId: 'powerVirtualServer',
          external: false,
        },
        {
          name: 'IBM WebSphere Application Server on Cloud',
          longDescription: 'Runtime and SDK for Java applications',
          url: '/cloud/websphere-application-platform',
          pricingUrl: '/cloud/websphere-application-server/pricing',
          translationId: 'websphere',
          external: false,
        },
      ],
    },
    {
      name: 'Containers',
      translationId: 'containers',
      description: 'Deploy applications consistently across environments',
      icon: 'containers.svg',
      link: '/cloud/containers',
      products: [
        {
          name: 'Container registry',
          longDescription: 'SaaS for container storage and management',
          url: '/cloud/container-registry',
          pricingUrl: '/cloud/container-registry/pricing',
          translationId: 'containerRegistry',
          external: false,
        },
        {
          name: 'IBM Cloud Kubernetes Service',
          longDescription:
            'Container hosting with self-healing and horizontal scaling',
          url: '/cloud/kubernetes-service',
          pricingUrl: '/cloud/kubernetes-service/pricing',
          translationId: 'kubernetes',
          external: false,
        },
        {
          name: 'Istio',
          longDescription:
            'A service mesh for microservices in Kubernetes clusters',
          url: '/cloud/istio',
          pricingUrl: null,
          translationId: 'istio',
          external: false,
        },
        {
          name: 'Red Hat® OpenShift® on IBM Cloud',
          longDescription: 'Container hosting on managed Red Hat Linux servers',
          url: '/cloud/openshift',
          pricingUrl: '/cloud/openshift/pricing',
          translationId: 'openShift',
          external: false,
        },
      ],
    },
    {
      name: 'Databases',
      translationId: 'databases',
      description: 'Store, query and analyze structured data',
      icon: 'https://1.cms.s81c.com/sites/default/files/2019-06-17/product-database-new.svg',
      link: '/cloud/databases',
      products: [
        {
          name: 'IBM Cloud Databases for Elasticsearch',
          longDescription: 'Managed JSON document store for full-text search',
          url: '/cloud/databases-for-elasticsearch',
          pricingUrl: '/cloud/databases-for-elasticsearch/pricing',
          translationId: 'databasesForElasticsearch',
          external: false,
        },
        {
          name: 'IBM Cloud Databases for EnterpriseDB',
          longDescription: 'Managed SQL database',
          url: 'https://www.ibm.com/cloud/databases-for-enterprisedb',
          pricingUrl:
            'https://cloud.ibm.com/databases/databases-for-enterprisedb/create',
          translationId: 'databasesForEnterprisedb',
          external: false,
        },
        {
          name: 'IBM Cloud Databases for etcd',
          longDescription: 'Managed distributed key-value store',
          url: '/cloud/databases-for-etcd',
          pricingUrl: '/cloud/databases-for-etcd/pricing',
          translationId: 'databasesForEtcd',
          external: false,
        },
        {
          name: 'IBM Cloud Databases for MongoDB',
          longDescription: 'Managed NoSQL JSON document store',
          url: '/cloud/databases-for-mongodb',
          pricingUrl: '/cloud/databases-for-mongodb/pricing',
          translationId: 'databasesForMongodb',
          external: false,
        },
        {
          name: 'IBM Cloud Databases for MySQL',
          longDescription:
            'A fully managed MySQL relational database service. Deploy and scale effortlessly to drive innovation.',
          url: '/cloud/databases-for-mysql',
          pricingUrl: '/cloud/databases-for-mysql',
          translationId: 'databasesForMysql',
          external: false,
        },
        {
          name: 'IBM Cloud Databases for PostgreSQL',
          longDescription: 'Managed SQL database',
          url: '/cloud/databases-for-postgresql',
          pricingUrl: '/cloud/databases-for-postgresql/pricing',
          translationId: 'databasesForPostgresql',
          external: false,
        },
        {
          name: 'IBM Cloud Databases for Redis',
          longDescription: 'Managed in-memory key value store',
          url: '/cloud/databases-for-redis',
          pricingUrl: '/cloud/databases-for-redis/pricing',
          translationId: 'databasesForRedis',
          external: false,
        },
        {
          name: 'IBM Cloudant®',
          longDescription:
            'Managed PCI-compliant JSON document store on CouchDB',
          url: '/cloud/cloudant',
          pricingUrl: '/cloud/cloudant/pricing',
          translationId: 'cloudant',
          external: false,
        },
        {
          name: 'IBM Db2 Warehouse on Cloud',
          longDescription: 'Managed data warehouse on IBM Cloud or AWS',
          url: '/cloud/db2-warehouse-on-cloud',
          pricingUrl: '/cloud/db2-warehouse-on-cloud/pricing',
          translationId: 'db2Warehouse',
          external: false,
        },
        {
          name: 'IBM Db2® on Cloud',
          longDescription: 'Managed SQL database',
          url: '/cloud/db2-on-cloud',
          pricingUrl: '/cloud/db2-on-cloud/pricing',
          translationId: 'db2',
          external: false,
        },
        {
          name: 'IBM Hyper Protect DBaaS',
          longDescription: 'Managed PostgreSQL and MongoDB for sensitive data',
          url: '/cloud/hyper-protect-dbaas',
          pricingUrl: '/cloud/hyper-protect-dbaas/pricing',
          translationId: 'hyperProtectDbaas',
          external: false,
        },
        {
          name: 'IBM Informix® on Cloud',
          longDescription:
            'Managed DB for time series, spatial, NoSQL and SQL data',
          url: '/cloud/informix',
          pricingUrl: '/cloud/informix/pricing',
          translationId: 'informix',
          external: false,
        },
      ],
    },
    {
      name: 'Developer tools',
      translationId: 'developerTools',
      description: 'Manage infrastructure, environments and deployments',
      icon: 'https://1.cms.s81c.com/sites/default/files/2019-06-17/product-developer-tools.svg',
      link: '/cloud/devops',
      products: [
        {
          name: 'IBM Cloud App Configuration',
          longDescription:
            'SDK, dashboard and API for application feature management',
          url: 'https://cloud.ibm.com/catalog/services/app-configuration#about',
          pricingUrl: null,
          translationId: 'appConfiguration',
          external: false,
        },
        {
          name: 'IBM Cloud CLI',
          longDescription: 'A CLI to manage your IBM Cloud',
          url: '/cloud/cli',
          pricingUrl: null,
          translationId: 'cloudCli',
          external: false,
        },
        {
          name: 'IBM Cloud Continuous Delivery',
          longDescription:
            'UI and CLI based DevOps workflows based on Tekton Pipelines',
          url: '/cloud/continuous-delivery',
          pricingUrl: '/cloud/continuous-delivery/pricing',
          translationId: 'continuousDelivery',
          external: false,
        },
        {
          name: 'IBM Cloud Messages for RabbitMQ',
          longDescription: 'Managed message broker',
          url: '/cloud/messages-for-rabbitmq',
          pricingUrl: '/cloud/messages-for-rabbitmq/pricing',
          translationId: 'messagesForRabbitmq',
          external: false,
        },
        {
          name: 'IBM Cloud Schematics',
          longDescription:
            'Managed service to provision resources with terraform templates',
          url: 'https://www.ibm.com/cloud/schematics',
          pricingUrl: null,
          translationId: 'schematics',
          external: false,
        },
        {
          name: 'IBM Cloud SQL Query',
          longDescription: 'Query tool for IBM Cloud Object Storage',
          url: '/cloud/sql-query',
          pricingUrl: 'https://cloud.ibm.com/catalog/services/sql-query',
          translationId: 'sqlQuery',
          external: false,
        },
        {
          name: 'Tekton',
          longDescription: 'Kubernetes-native CI and CD pipelines',
          url: '/cloud/tekton',
          pricingUrl: null,
          translationId: 'tekton',
          external: false,
        },
      ],
    },
    {
      name: 'Integration',
      translationId: 'integration',
      description:
        'Integrate your apps through APIs, messaging and networking tools',
      icon: 'https://1.cms.s81c.com/sites/default/files/2019-05-23/product-integration.svg',
      link: '/cloud/integration',
      products: [
        {
          name: 'IBM API Connect®',
          longDescription:
            'A toolkit to rapidly create, secure and manage APIs',
          url: '/cloud/api-connect',
          pricingUrl: '/cloud/api-connect/pricing',
          translationId: 'apiConnect',
          external: false,
        },
        {
          name: 'IBM App Connect',
          longDescription: 'Codeless connectors for your data, apps and APIs',
          url: '/cloud/app-connect',
          pricingUrl: '/cloud/app-connect/pricing',
          translationId: 'appConnect',
          external: false,
        },
        {
          name: 'IBM Aspera® on Cloud',
          longDescription: 'UI and CLI to rapidly move large files',
          url: '/cloud/aspera',
          pricingUrl: '/cloud/aspera/pricing',
          translationId: 'aspera',
          external: false,
        },
        {
          name: 'IBM Cloud for Skytap Solutions',
          longDescription:
            'Virtualization for x86, AIX, System i and Power applications',
          url: '/cloud/skytap',
          pricingUrl: null,
          translationId: 'skytap',
          external: false,
        },
        {
          name: 'IBM Cloud Pak for Integration',
          longDescription: 'Tools to connect all of your apps, data and events',
          url: '/cloud/cloud-pak-for-integration',
          pricingUrl: '/cloud/cloud-pak-for-integration/pricing',
          translationId: 'pakIntegration',
          external: false,
        },
        {
          name: 'IBM Event Streams',
          longDescription: 'PaaS stream processing based on Apache Kafka',
          url: '/cloud/event-streams',
          pricingUrl: null,
          translationId: 'eventStreams',
          external: false,
        },
        {
          name: 'IBM Lift',
          longDescription: 'Toolkit to migrate on-premises data to the cloud',
          url: '/cloud/lift',
          pricingUrl: null,
          translationId: 'lift',
          external: false,
        },
        {
          name: 'IBM MQ on Cloud',
          longDescription: 'Managed message broker',
          url: '/cloud/mq',
          pricingUrl: '/cloud/mq/pricing',
          translationId: 'cloudMq',
          external: false,
        },
        {
          name: 'Secure gateway',
          longDescription:
            'Secure tunnels between cloud and external environments',
          url: '/cloud/secure-gateway',
          pricingUrl: '/cloud/secure-gateway/pricing',
          translationId: 'secureGateway',
          external: false,
        },
      ],
    },
    {
      name: 'Internet of things',
      translationId: 'iot',
      description: 'Connect and manage edge devices',
      icon: 'https://1.cms.s81c.com/sites/default/files/2019-05-23/product-IoT.svg',
      link: '/cloud/internet-of-things',
      products: [
        {
          name: 'IBM Edge Application Manager',
          longDescription:
            'An autonomous management platform for edge computing',
          url: '/cloud/edge-computing',
          pricingUrl: null,
          translationId: 'edgeComputing',
          external: false,
        },
        {
          name: 'IBM Maximo Application Suite: Remote monitoring',
          longDescription:
            'Predict and prevent issues with advanced AI-powered remote monitoring and computer vision for assets and operations.',
          url: '/products/maximo/remote-monitoring',
          pricingUrl: null,
          translationId: 'iotPlatform',
          external: false,
        },
      ],
    },
    {
      name: 'Logging and monitoring',
      translationId: 'loggingAndMonitoring',
      description: 'Log and analyze activity in your infrastructure',
      icon: 'logging-and-monitoring.svg',
      link: '',
      products: [
        {
          name: 'IBM Cloud Activity Tracker',
          longDescription:
            'Dashboard to monitor and analyze events in IBM Cloud',
          url: '/cloud/activity-tracker',
          pricingUrl: null,
          translationId: 'activityTracker',
          external: false,
        },
        {
          name: 'IBM Cloud Log Analysis',
          longDescription: 'Analysis dashboard for system and application logs',
          url: '/cloud/log-analysis',
          pricingUrl: 'https://cloud.ibm.com/catalog/services/logdna',
          translationId: 'logAnalysis',
          external: false,
        },
        {
          name: 'IBM Cloud Monitoring',
          longDescription: 'Managed dashboard for Kubernetes devops',
          url: '/cloud/cloud-monitoring',
          pricingUrl:
            'https://cloud.ibm.com/catalog/services/ibm-cloud-monitoring',
          translationId: 'sysdig',
          external: false,
        },
        {
          name: 'IBM Cloud Pak for Watson AIOps',
          longDescription:
            'DevOps management tool with AI analysis and recommendations',
          url: '/cloud/cloud-pak-for-watson-aiops',
          pricingUrl: '/cloud/cloud-pak-for-watson-aiops/pricing',
          translationId: 'watsonAiops',
          external: false,
        },
      ],
    },
    {
      name: 'Networking',
      translationId: 'network',
      description: 'Run and manage public, private and virtual networks',
      icon: 'https://1.cms.s81c.com/sites/default/files/2019-05-23/product-network.svg',
      link: '/cloud/network',
      products: [
        {
          name: 'Domain name services',
          longDescription: 'Public and private DNS and domain registration',
          url: '/cloud/dns',
          pricingUrl: '/cloud/dns/pricing',
          translationId: 'dns',
          external: false,
        },
        {
          name: 'IBM Cloud Content Delivery Network',
          longDescription: 'Content caching and delivery on the Akamai network',
          url: '/cloud/cdn',
          pricingUrl:
            'https://cloud.ibm.com/docs/infrastructure/CDN?topic=CDN-pricing#pricing',
          translationId: 'cdn',
          external: false,
        },
        {
          name: 'IBM Cloud Direct Link',
          longDescription:
            'Physical or virtual private connections to IBM Cloud',
          url: '/cloud/direct-link',
          pricingUrl:
            'https://cloud.ibm.com/docs/infrastructure/direct-link?topic=direct-link-pricing-for-ibm-cloud-direct-link#pricing-for-ibm-cloud-direct-link',
          translationId: 'directLink',
          external: false,
        },
        {
          name: 'IBM Cloud Internet Services',
          longDescription: 'Load balancing and CDN solution',
          url: '/cloud/cloud-internet-services',
          pricingUrl:
            'https://cloud.ibm.com/catalog/services/internet-services',
          translationId: 'cloudInternetServices',
          external: false,
        },
        {
          name: 'Load balancer',
          longDescription: 'Traffic flow management for cloud applications',
          url: '/cloud/load-balancer',
          pricingUrl:
            'https://cloud.ibm.com/docs/infrastructure/loadbalancer-service?topic=loadbalancer-service-ibm-cloud-load-balancer-pricing',
          translationId: 'loadBalancer',
          external: false,
        },
        {
          name: 'Network appliances',
          longDescription:
            'Physical and virtual routers, firewalls, VPNs and more',
          url: '/cloud/network-appliances',
          pricingUrl: null,
          translationId: 'networkAppliances',
          external: false,
        },
        {
          name: 'Network security',
          longDescription:
            'Hardware and software firewalls, network security group management',
          url: '/cloud/network-security',
          pricingUrl: null,
          translationId: 'loudNetworkSecurity',
          external: false,
        },
      ],
    },
    {
      name: 'Quantum',
      translationId: 'quantum',
      description: 'Run code on real quantum systems using a full-stack SDK',
      icon: 'quantum.svg',
      link: 'https://cloud.ibm.com/quantum',
      products: [
        {
          name: 'Qiskit',
          longDescription: 'Python SDK for open-source quantum development',
          url: 'https://qiskit.org',
          pricingUrl: null,
          translationId: 'qiskit',
          external: true,
        },
        {
          name: 'Qiskit Runtime',
          longDescription:
            'Low-latency execution environment for quantum programs',
          url: 'https://cloud.ibm.com/catalog/services/quantum-computing',
          pricingUrl: null,
          translationId: 'qiskitRuntime',
          external: false,
        },
      ],
    },
    {
      name: 'Security',
      translationId: 'security',
      description:
        'Secure your cloud resources and simplify regulatory compliance',
      icon: 'https://1.cms.s81c.com/sites/default/files/2019-05-23/product-security.svg',
      link: '/cloud/security',
      products: [
        {
          name: 'IBM Cloud App ID',
          longDescription:
            'Compliant authentication, authorization and user data SaaS',
          url: '/cloud/app-id',
          pricingUrl: 'https://cloud.ibm.com/catalog/services/app-id',
          translationId: 'appId',
          external: false,
        },
        {
          name: 'IBM Cloud Certificate Manager',
          longDescription: 'Certificate management for cloud resources',
          url: 'https://www.ibm.com/cloud/certificate-manager',
          pricingUrl:
            'https://cloud.ibm.com/catalog/services/certificate-manager',
          translationId: 'certificateManager',
          external: false,
        },
        {
          name: 'IBM Cloud Data Shield',
          longDescription:
            'Runtime encryption for data-in-use protection on Kubernetes clusters',
          url: 'https://www.ibm.com/cloud/data-shield',
          pricingUrl:
            'https://cloud.ibm.com/catalog/services/ibm-cloud-data-shield',
          translationId: 'dataShield',
          external: false,
        },
        {
          name: 'IBM Cloud Hardware Security Module',
          longDescription:
            'Tamper-resistant hardware to store and process cryptographic keys',
          url: '/cloud/hardware-security-module',
          pricingUrl: 'https://cloud.ibm.com/gen1/infrastructure/provision/hsm',
          translationId: 'securityModule',
          external: false,
        },
        {
          name: 'IBM Cloud Pak for Security',
          longDescription:
            'Security auditing, reporting, analysis and governance',
          url: '/products/cloud-pak-for-security',
          pricingUrl: '/products/cloud-pak-for-security/pricing',
          translationId: 'pakSecurity',
          external: false,
        },
        {
          name: 'IBM Cloud Secrets Manager',
          longDescription:
            'Single-tenant, dedicated instance to manage your secrets',
          url: 'https://www.ibm.com/cloud/secrets-manager',
          pricingUrl: 'https://cloud.ibm.com/catalog/services/secrets-manager',
          translationId: 'secretsManager',
          external: false,
        },
        {
          name: 'IBM Cloud Security Advisor',
          longDescription:
            'Dashboard for security management, analysis and remediation',
          url: '/cloud/security-advisor',
          pricingUrl: null,
          translationId: 'securityAdvisor',
          external: false,
        },
        {
          name: 'IBM Cloud Security and Compliance Center',
          longDescription:
            'SaaS to define and audit the compliance posture of your cloud',
          url: 'https://www.ibm.com/cloud/security-and-compliance-center',
          pricingUrl: null,
          translationId: 'compianceCenter',
          external: false,
        },
        {
          name: 'IBM Hyper Protect Crypto Services',
          longDescription:
            'Cloud hardware to store and process cryptographic keys',
          url: '/cloud/hyper-protect-crypto',
          pricingUrl: '/cloud/hyper-protect-crypto/pricing',
          translationId: 'hyperProtectCryptoServices',
          external: false,
        },
        {
          name: 'IBM Key Protect',
          longDescription:
            'Encryption key provisioning and storage for IBM Cloud apps',
          url: 'https://www.ibm.com/cloud/key-protect',
          pricingUrl: 'https://cloud.ibm.com/catalog/services/key-protect',
          translationId: 'keyProtect',
          external: false,
        },
        {
          name: 'Network security',
          longDescription:
            'Hardware and software firewalls, network security group management',
          url: '/cloud/network-security',
          pricingUrl: null,
          translationId: 'loudNetworkSecurity',
          external: false,
        },
        {
          name: 'SSL certificates',
          longDescription: 'Certificates for cloud resources',
          url: '/cloud/ssl-certificates',
          pricingUrl: null,
          translationId: 'sslCertificates',
          external: false,
        },
      ],
    },
    {
      name: 'Storage',
      translationId: 'storage',
      description: 'Store, migrate and back up your data',
      icon: 'https://1.cms.s81c.com/sites/default/files/2019-06-14/product-storage-new.svg',
      link: '/cloud/storage',
      products: [
        {
          name: 'IBM Cloud Backup',
          longDescription:
            'Fully encrypted backup and recovery across multiple datacenters ',
          url: '/cloud/backup',
          pricingUrl: '/cloud/backup/pricing',
          translationId: 'backup',
          external: false,
        },
        {
          name: 'IBM Cloud Block Storage',
          longDescription:
            'The lowest latency, highest redundancy data storage option',
          url: '/cloud/block-storage',
          pricingUrl: '/cloud/block-storage/pricing',
          translationId: 'blockStorage',
          external: false,
        },
        {
          name: 'IBM Cloud File Storage',
          longDescription:
            'The simplest solution for data organized into files and folders',
          url: '/cloud/file-storage',
          pricingUrl: '/cloud/file-storage/pricing',
          translationId: 'fileStorage',
          external: false,
        },
        {
          name: 'IBM Cloud Mass Data Migration',
          longDescription:
            'Secure hardware to physically ship petabytes of data to IBM Cloud',
          url: '/cloud/mass-data-migration',
          pricingUrl: 'https://cloud.ibm.com/mdms',
          translationId: 'massDataMigration',
          external: false,
        },
        {
          name: 'IBM Cloud Object Storage',
          longDescription:
            'Unstructured cloud data storage with an API frontend',
          url: '/cloud/object-storage',
          pricingUrl: '/cloud/object-storage/pricing',
          translationId: 'objectStorage',
          external: false,
        },
      ],
    },
  ],
};