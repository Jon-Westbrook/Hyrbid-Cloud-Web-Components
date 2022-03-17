export const products = {
  categories: [
    {
      name: 'Compute',
      translationId: 'compute',
      description: 'Compute description',
      icon: 'storage',
      link: '/it-infrastructure/storage',
      products: [
        {
          name: 'IBM Cloud Bare Metal Servers',
          longDescription:
            'High-performance, dedicated cloud servers with both hourly and monthly billing options.',
          url: 'https://cloud.ibm.com/gen1/infrastructure/provision/bm',
          translationId: 'baremetalservers',
        },
        {
          name: 'IBM Cloud Virtual Servers for Classic Infrastructure',
          longDescription:
            'Public and dedicated virtual servers that provision and scale on demand.',
          url: '/cloud/virtual-servers/pricing',
          translationId: 'virtualserversclassic',
        },
        {
          name: 'IBM Cloud Virtual Servers for VPC',
          longDescription:
            'Fast provisioning, high network performance, greater throughput and enhanced isolation.',
          url: '/cloud/vpc/pricing',
          translationId: 'virtualserversvpc',
        },
        {
          name: 'IBM Cloud Code Engine',
          longDescription:
            'Run your application, job, or container on a managed serverless platform.',
          url: '/cloud/code-engine/pricing',
          translationId: 'cloudcodeengine',
        },
        {
          name: 'IBM Cloud Foundry',
          longDescription:
            'Deploy and scale apps without manually configuring and managing servers.',
          url: '/cloud/cloud-foundry',
          translationId: 'cloudfoundry',
        },
        {
          name: 'IBM Cloud Functions',
          longDescription:
            'A polyglot functions-as-a-service (FaaS) programming platform based on Apache OpenWhisk.',
          url: '/functions/learn/pricing',
          translationId: 'cloudfunctions',
        },
        {
          name: 'IBM Hyper Protect Virtual Servers',
          longDescription:
            'Gain complete authority over workloads with sensitive data or your business IP.',
          url: '/cloud/hyper-protect-virtual-servers/pricing',
          translationId: 'hyperprotect',
        },
        {
          name: 'IBM Power Systems Virtual Servers on IBM Cloud',
          longDescription:
            'Extend your IBM POWER® resources into the cloud and avoid the large capital expense or added risk to migrate your essential workloads.',
          url: 'https://cloud.ibm.com/catalog/services/power-systems-virtual-server',
          translationId: 'powersystems',
        },
        {
          name: 'IBM WebSphere® Application Server on Cloud',
          longDescription:
            'A flexible, security-rich Java server runtime environment for enterprise applications',
          url: '/cloud/websphere-application-server/pricing',
          translationId: 'websphere',
        },
        {
          name: 'IBM Cloud for VMware Solutions',
          longDescription:
            'Seamlessly modernize your VMware workloads and applications with IBM Cloud',
          url: '/cloud/vmware/pricing',
          translationId: 'vmware',
        },
      ],
    },
    {
      name: 'Containers',
      translationId: 'containers',
      description: 'containers description',
      icon: 'power',
      link: '/it-infrastructure/power',
      products: [
        {
          name: 'IBM Cloud Kubernetes Service',
          longDescription:
            'Create a cluster of compute hosts and deploys highly available containers. ',
          url: '/cloud/kubernetes-service/pricing',
          translationId: 'kubernetes',
        },
        {
          name: 'Red Hat OpenShift on IBM Cloud',
          longDescription:
            'Build and deploy container-based applications on a fully managed, integrated and reliable platform.',
          url: '/cloud/openshift/pricing',
          translationId: 'openshift',
        },
        {
          name: 'IBM Cloud Container Registry',
          longDescription:
            'Store and distribute Docker images in a managed, private registry',
          url: '/cloud/openshift/pricing',
          translationId: 'registry',
        },
      ],
    },
    {
      name: 'Network',
      translationId: 'network',
      description: 'network description',
      icon: 'z',
      link: '/it-infrastructure/z',
      products: [
        {
          name: 'IBM Content Delivery Network (CDN)',
          longDescription:
            'Avoid network traffic jams and decrease latency by keeping data closer to users',
          url: 'https://cloud.ibm.com/docs/infrastructure/CDN?topic=CDN-pricing#pricing',
          translationId: 'ibmcdn',
        },
        {
          name: 'IBM Cloud Direct Link',
          longDescription:
            'Secure and accelerate data transfer between private infrastructure and IBM Cloud',
          url: 'https://cloud.ibm.com/docs/infrastructure/direct-link?topic=direct-link-pricing-for-ibm-cloud-direct-link#pricing-for-ibm-cloud-direct-link',
          translationId: 'ibmdl',
        },
        {
          name: 'IBM Cloud DNS',
          longDescription:
            'Full-service domain registration and administration',
          url: '/cloud/dns/pricing',
          translationId: 'ibmdns',
        },
        {
          name: 'IBM Cloud Load Balancers',
          longDescription:
            'Load balance traffic among servers to improve uptime and performance',
          url: 'https://cloud.ibm.com/docs/infrastructure/loadbalancer-service?topic=loadbalancer-service-ibm-cloud-load-balancer-pricing',
          translationId: 'ibmcload',
        },
        {
          name: 'IBM Cloud Internet Services',
          longDescription:
            'A one-stop shop for security and performance capabilities designed to protect public-facing web content and applications before they reach the cloud',
          url: 'https://cloud.ibm.com/catalog/services/internet-services',
          translationId: 'ibmcis',
        },
        {
          name: 'IBM Cloud Direct Link Exchange',
          longDescription:
            'Multi-tenant connections to your IBM Cloud infrastructure, through your local IBM Cloud datacenter, perfect for creating multi-cloud connectivity in a single environment',
          url: 'https://cloud.ibm.com/docs/infrastructure/direct-link?topic=direct-link-pricing-for-ibm-cloud-direct-link#pricing-for-ibm-cloud-direct-link',
          translationId: 'ibmdle',
        },
      ],
    },
    {
      name: 'Storage',
      translationId: 'storage',
      description: 'Storage description',
      icon: 'power',
      link: '/it-infrastructure/power',
      products: [
        {
          name: 'IBM Cloud Object Storage',
          longDescription:
            'Flexible, cost-effective and scalable cloud storage for unstructured data. Get 25 GB per month, cost free.',
          url: 'https://cloud.ibm.com/docs/infrastructure/CDN?topic=CDN-pricing#pricing',
          translationId: 'icos',
        },
        {
          name: 'IBM Cloud Block Storage',
          longDescription:
            'Flash-backed, local disk performance with SAN persistence and durability',
          url: '/cloud/block-storage/pricing',
          translationId: 'icbs',
        },
        {
          name: 'IBM Cloud File Storage',
          longDescription:
            'Flash-backed, durable, fast and flexible NFS-based file storageFlash-backed, durable, fast and flexible NFS-based file storage',
          url: '/cloud/file-storage/pricing',
          translationId: 'icfs',
        },
        {
          name: 'IBM Cloud Backup',
          longDescription:
            'Enterprise-grade backup and recovery solution with unified automation, scaling, third-party integration, encryption and multi-vaulting capabilities.',
          url: '/cloud/backup/pricing',
          translationId: 'icb',
        },
        {
          name: 'IBM Cloud Mass Data Migration',
          longDescription:
            'Securely move terabytes or petabytes of data by aggregating rugged, 120 TB storage devices.',
          url: 'https://cloud.ibm.com/mdms',
          translationId: 'icmdm',
        },
      ],
    },
    {
      name: 'IBM Cloud Paks',
      translationId: 'ibmcp',
      description: 'IBM Cloud Paks description',
      icon: 'power',
      link: '/it-infrastructure/power',
      products: [
        {
          name: 'IBM Cloud Pak for Watson AIOps',
          longDescription:
            'Deploy advanced, explainable AI across the ITOps toolchain so you can confidently assess, diagnose and resolve incidents across mission-critical workloads.',
          url: '/cloud/cloud-pak-for-watson-aiops/pricing',
          translationId: 'icpwa',
        },
        {
          name: 'IBM Cloud Pak for Integration',
          longDescription:
            'Improve application speed and quality with a recognized leader in cloud integration',
          url: '/cloud/cloud-pak-for-integration/pricing',
          translationId: 'icpi',
        },
        {
          name: 'IBM Cloud Pak for Business Automation',
          longDescription:
            "Connect your security data, tools and teams to uncover hidden threats and make informed risk-based decisions with an integrated platform that doesn't require migrating your data.",
          url: '/cloud/cloud-pak-for-business-automation/pricing',
          translationId: 'icpba',
        },
        {
          name: 'IBM Cloud Pak for Security',
          longDescription:
            'Solve your toughest operational challenges to achieve better business performance with this modular set of integrated AI-powered automation software, built for any hybrid cloud.',
          url: '/products/cloud-pak-for-security/pricing',
          translationId: 'icps',
        },
      ],
    },
    {
      name: 'Security',
      translationId: 'security',
      description: 'security description',
      icon: 'power',
      link: '/it-infrastructure/power',
      products: [
        {
          name: 'IBM Cloud Pak for Security',
          longDescription:
            'Solve your toughest operational challenges to achieve better business performance with this modular set of integrated AI-powered automation software, built for any hybrid cloud.',
          url: '/products/cloud-pak-for-security/pricing',
          translationId: 'icps',
        },
        {
          name: 'IBM Cloud Secrets Manager',
          longDescription:
            'Create secrets dynamically and lease them to applications while you control access from a single location. Built on open source HashiCorp Vault, Secrets Manager helps you get the data isolation of a dedicated environment with the benefits of a public cloud.',
          url: 'https://cloud.ibm.com/catalog/services/secrets-manager',
          translationId: 'icsm',
        },
        {
          name: 'IBM Cloud App ID',
          longDescription:
            'Add authentication to web and mobile apps, including through social login',
          url: 'https://cloud.ibm.com/catalog/services/app-id',
          translationId: 'icaid',
        },
        {
          name: 'IBM Cloud Certificate Manager',
          longDescription:
            'Store and centrally manage your certificates in a secure repository',
          url: 'https://cloud.ibm.com/catalog/services/certificate-manager',
          translationId: 'iccm',
        },
        {
          name: 'IBM Cloud Hyper Protect Crypto Services',
          longDescription:
            'Discover a simple set of edge-network services for customers looking to secure their internet-facing applications from distributed denial-of-service (DDoS) attacks, data theft and bot attacks',
          url: 'https://www.ibm.com/cloud/hyper-protect-crypto/pricing',
          translationId: 'ichpcs',
        },
        {
          name: 'IBM Key Protect',
          longDescription:
            'Lifecycle management of encryption keys used by IBM Cloud services or custom apps',
          url: 'https://cloud.ibm.com/catalog/services/key-protect',
          translationId: 'ickp',
        },
      ],
    },
    {
      name: 'Databases',
      translationId: 'databases',
      description: 'databases description',
      icon: 'power',
      link: '/it-infrastructure/power',
      products: [
        {
          name: 'IBM Cloudant®',
          longDescription:
            'A scalable JSON document database for web, mobile, IoT and serverless applications.',
          url: '/cloud/cloudant/pricing',
          translationId: 'ibmcloudant',
        },
        {
          name: 'IBM Cloud Databases for EnterpriseDB',
          longDescription:
            'A database engine that optimizes the built-in features of PostgreSQL and offers compatibility with Oracle databases.',
          url: 'https://cloud.ibm.com/catalog/services/databases-for-enterprisedb',
          translationId: 'icde',
        },
        {
          name: 'IBM Cloud Databases for PostgreSQL',
          longDescription:
            'An object-relational SQL database with indexable JSON, publish/subscribe functions and drivers.',
          url: '/cloud/databases-for-postgresql/pricing',
          translationId: 'icdp',
        },
        {
          name: 'IBM Cloud Databases for MongoDB',
          longDescription:
            'A JSON document store with a rich query and aggregation framework.',
          url: 'https://cloud.ibm.com/catalog/services/databases-for-mongodb',
          translationId: 'icdm',
        },
        {
          name: 'IBM Cloud Databases for Elasticsearch',
          longDescription:
            'Combines the flexibility of a full-text search engine with the power of JSON indexing',
          url: 'https://cloud.ibm.com/catalog/services/databases-for-elasticsearch',
          translationId: 'icdes',
        },
        {
          name: 'IBM Cloud Databases for etcd',
          longDescription:
            'A key-value store that holds the correct data needed to manage server clusters',
          url: 'https://cloud.ibm.com/catalog/services/databases-for-etcd',
          translationId: 'icdfe',
        },
        {
          name: 'IBM Cloud Databases for Redis',
          longDescription:
            'An open source, in-memory data structure store, used as a database, cache and message broker.',
          url: 'https://cloud.ibm.com/catalog/services/databases-for-redis',
          translationId: 'icdr',
        },
        {
          name: 'IBM Db2 on Cloud',
          longDescription:
            'A fully managed cloud database with AI capabilities that keep your business running 24x7  ',
          url: '/cloud/db2-on-cloud/pricing',
          translationId: 'icdb2',
        },
        {
          name: 'IBM Informix® on Cloud',
          longDescription:
            'High-performance engine that integrates time series, spatial, NoSQL and SQL data.',
          url: '/cloud/informix/pricing',
          translationId: 'inoc',
        },
        {
          name: 'IBM Db2 Warehouse on Cloud',
          longDescription:
            'A fully managed, elastic cloud data warehouse built for high-performance analytics and AI',
          url: 'https://www.ibm.com/cloud/db2-warehouse-on-cloud/pricing',
          translationId: 'icdb2w',
        },
        {
          name: 'IBM Cloud Hyper Protect DBaaS for MongoDB',
          longDescription:
            'LinuxONE-powered cloud database solution for enterprise workloads with sensitive data',
          url: 'https://cloud.ibm.com/catalog/services/databases-for-redis',
          translationId: 'ichpdbm',
        },
        {
          name: 'IBM Cloud Hyper Protect DBaaS for PostgreSQL',
          longDescription:
            'LinuxONE-powered cloud database solution for enterprise workloads with sensitive data',
          url: 'https://cloud.ibm.com/catalog/services/sql-query',
          translationId: 'ichpdbp',
        },
        {
          name: 'IBM Cloud Messages for RabbitMQ',
          longDescription:
            'RabbitMQ routes messages between microservices for modern applications. ',
          url: 'https://cloud.ibm.com/catalog/services/messages-for-rabbitmq',
          translationId: 'icmfr',
        },
        {
          name: 'IBM Cloud SQL Query',
          longDescription:
            'Serverless, interactive querying for analyzing data in IBM Cloud Object Storage',
          url: 'https://cloud.ibm.com/catalog/services/sql-query',
          translationId: 'icsq',
        },
        {
          name: 'IBM Cloud Databases for PostgreSQL',
          longDescription:
            'An object-relational SQL database with indexable JSON, publish/subscribe functions and drivers',
          url: '/cloud/databases-for-postgresql/pricing',
          translationId: 'icdfp',
        },
      ],
    },
    {
      name: 'Analytics',
      translationId: 'analytics',
      description: 'Analytics description',
      icon: 'power',
      link: '/it-infrastructure/power',
      products: [
        {
          name: 'IBM Analytics Engine',
          longDescription:
            'A combined Apache Spark and Apache Hadoop service for creating analytics applications',
          url: '/cloud/analytics-engine/pricing',
          translationId: 'ibmae',
        },
        {
          name: 'IBM Cloud SQL Query',
          longDescription:
            'Serverless, interactive querying for analyzing data in IBM Cloud Object Storage',
          url: 'https://cloud.ibm.com/catalog/services/sql-query',
          translationId: 'ibmcsql',
        },
        {
          name: 'IBM Master Data Management on Cloud',
          longDescription:
            'Gain a trusted view of data in a hybrid-computing environment',
          url: '/cloud/mdm/pricing',
          translationId: 'ibmmdmc',
        },
        {
          name: 'IBM InfoSphere® Information Server on Cloud',
          longDescription:
            'Understand, govern, create, maintain, transform and deliver quality data',
          url: '/cloud/information-server/pricing',
          translationId: 'infosphere',
        },
        {
          name: 'IBM Streaming Analytics',
          longDescription:
            'Understand, govern, create, maintain, transform and deliver quality data',
          url: '/cloud/streaming-analytics/pricing',
          translationId: 'streamanal',
        },
        {
          name: 'IBM Db2 Warehouse on Cloud',
          longDescription:
            'A fully managed, elastic cloud data warehouse built for high-performance analytics and AI',
          url: '/cloud/db2-warehouse-on-cloud/pricing',
          translationId: 'ibmdb2woc',
        },
      ],
    },
    {
      name: 'AI',
      translationId: 'ai',
      description: 'ai description',
      icon: 'power',
      link: '/it-infrastructure/power',
      products: [
        {
          name: 'IBM Watson Assistant',
          longDescription: 'Build and deploy virtual assistants',
          url: 'https://cloud.ibm.com/catalog/services/watson-openscale',
          translationId: 'ibmwass',
        },
        {
          name: 'IBM Cloud Pak for Watson AIOps',
          longDescription:
            'Focus on innovation, not outages. Drive new efficiency with AI-powered IT incident resolution, fueled by your own data.',
          url: '/cloud/cloud-pak-for-watson-aiops/pricing',
          translationId: 'ibmwaiops',
        },
        {
          name: 'IBM Watson Discovery',
          longDescription:
            'Uncover connections in data by combining automated ingestion with advanced AI functions',
          url: '/cloud/watson-discovery/pricing',
          translationId: 'ibmwaiops',
        },
        {
          name: 'IBM Watson Studio',
          longDescription:
            'Simplify and scale data science to predict and optimize your business outcomes.',
          url: '/cloud/watson-studio/pricing',
          translationId: 'ibmwstud',
        },
        {
          name: 'IBM Watson Openscale™',
          longDescription:
            'Operate and automate AI across its lifecycle, with trust and transparency.',
          url: 'https://cloud.ibm.com/catalog/services/watson-openscale',
          translationId: 'ibmwopen',
        },
        {
          name: 'IBM Watson Speech to Text',
          longDescription: 'Easily convert audio and voice into written text',
          url: '/cloud/watson-speech-to-text/pricing',
          translationId: 'ibmwtts',
        },
        {
          name: 'IBM Watson Speech to Text',
          longDescription: 'Easily convert audio and voice into written text',
          url: '/cloud/watson-speech-to-text/pricing',
          translationId: 'ibmwstt',
        },
        {
          name: 'IBM Watson Text to Speech',
          longDescription:
            'Convert written text into natural-sounding audio in a variety of languages and voices',
          url: '/cloud/watson-text-to-speech/pricing',
          translationId: 'ibmwtts',
        },
        {
          name: 'IBM Watson Natural Language Understanding',
          longDescription:
            'Analyze text to extract metadata from content such as concepts, entities and sentiment',
          url: '/cloud/watson-natural-language-understanding/pricing',
          translationId: 'ibmwnlu',
        },
        {
          name: 'IBM Watson Knowledge Catalog',
          longDescription:
            'Drive AI apps with intelligent data and analytic asset discovery, cataloging and governance.',
          url: '/cloud/watson-knowledge-catalog/pricing',
          translationId: 'ibmwkc',
        },
        {
          name: 'IBM Watson Knowledge Studio',
          longDescription:
            'Train IBM Watson to understand the linguistic nuances of your industry domain',
          url: '/cloud/watson-knowledge-studio/pricing',
          translationId: 'ibmwks',
        },
        {
          name: 'IBM Watson Machine Learning',
          longDescription:
            'Deploy self-learning models into production at scale',
          url: '/cloud/machine-learning/pricing',
          translationId: 'ibmwml',
        },
        {
          name: 'IBM Watson Natural Language Classifier',
          longDescription:
            'Interpret and classify natural language with confidence',
          url: '/cloud/watson-natural-language-classifier/pricing',
          translationId: 'ibmwnlc',
        },
        {
          name: 'IBM Watson Language Translator',
          longDescription:
            'Dynamically translate news, patents or conversational documents',
          url: '/cloud/watson-language-translator/pricing',
          translationId: 'ibmwnlt',
        },
      ],
    },
    {
      name: 'IoT',
      translationId: 'iot',
      description: 'iot description',
      icon: 'power',
      link: '/it-infrastructure/power',
      products: [
        {
          name: 'IBM Watson IoT Platform',
          longDescription:
            'Connect devices, gateways and networks, and manage, secure and analyze the associated data.',
          url: 'https://cloud.ibm.com/catalog/services/internet-of-things-platform',
          translationId: 'ibmwiot',
        },
      ],
    },
    {
      name: 'Mobile',
      translationId: 'mobile',
      description: 'mobile description',
      icon: 'power',
      link: '/it-infrastructure/power',
      products: [
        {
          name: 'IBM Push Notifications',
          longDescription:
            'Send real-time notifications to mobile and web applications',
          url: '/cloud/push-notifications/pricing',
          translationId: 'ibmpush',
        },
      ],
    },
    {
      name: 'Developer Tools',
      translationId: 'developer',
      description: 'developer description',
      icon: 'power',
      link: '/it-infrastructure/power',
      products: [
        {
          name: 'IBM Cloud Continuous Delivery',
          longDescription:
            'Provision toolchains, automate builds and tests, and control quality with analytics',
          url: '/cloud/continuous-delivery/pricing',
          translationId: 'ibmccd',
        },
        {
          name: 'IBM Cloud Event Management',
          longDescription:
            'Enables operational event and incident correlation, prioritization and resolution',
          url: '/cloud/event-management/pricing',
          translationId: 'ibmcem',
        },
        {
          name: 'IBM Cloud Messages for RabbitMQ',
          longDescription:
            'Route, track and queue messages, using multiple protocols.',
          url: 'https://cloud.ibm.com/catalog/services/messages-for-rabbitmq',
          translationId: 'ibmcmrmq',
        },
        {
          name: 'IBM Cloud SQL Query',
          longDescription:
            'Serverless, interactive querying for analyzing data in IBM Cloud Object Storage',
          url: 'https://cloud.ibm.com/catalog/services/sql-query',
          translationId: 'ibmcloudsql',
        },
      ],
    },
    {
      name: 'Logging and Monitoring',
      translationId: 'logging',
      description: 'Logging and Monitoring description',
      icon: 'power',
      link: '/it-infrastructure/power',
      products: [
        {
          name: 'IBM Log Analysis with LogDNA',
          longDescription:
            'Log collection and search that automatically collects application and services data',
          url: 'https://cloud.ibm.com/catalog/services/ibm-log-analysis-with-logdna',
          translationId: 'ibmlogdna',
        },
        {
          name: 'IBM Cloud Activity Tracker',
          longDescription: 'View, manage and audit activity in the cloud',
          url: 'https://cloud.ibm.com/catalog/services/ibm-cloud-activity-tracker-with-logdna?callback=%2Fobserve%2Factivitytracker%2Fcreate',
          translationId: 'ibmcacttrack',
        },
      ],
    },
    {
      name: 'Blockchain',
      translationId: 'blockchain',
      description: 'blockchain description',
      icon: 'power',
      link: '/it-infrastructure/power',
      products: [
        {
          name: 'IBM Blockchain Platform',
          longDescription:
            'Accelerate the development, governance and operation of a multi-institution network',
          url: '/cloud/blockchain-platform/pricing',
          translationId: 'blockchainplatform',
        },
      ],
    },
    {
      name: 'Integration',
      translationId: 'integration',
      description: 'integration description',
      icon: 'power',
      link: '/it-infrastructure/power',
      products: [
        {
          name: 'IBM Cloud Pak for Integration',
          longDescription:
            'Improve application speed and quality with a recognized leader in cloud integration',
          url: '/cloud/cloud-pak-for-integration/pricing',
          translationId: 'cloudpak4int',
        },
        {
          name: 'IBM API Connect',
          longDescription:
            'API creation and management, with built-in security and governance',
          url: '/cloud/cloud-pak-for-integration/pricing',
          translationId: 'apicon',
        },
        {
          name: 'IBM App Connect',
          longDescription:
            'Instantly connects applications and data from existing systems and modern technologies across all environments.',
          url: '/cloud/app-connect/pricing',
          translationId: 'appcon',
        },
        {
          name: 'IBM Aspera on Cloud',
          longDescription:
            'Send and share big files and data sets across any distance at maximum speed',
          url: '/cloud/aspera/pricing',
          translationId: 'asperaonc',
        },
        {
          name: 'IBM Event Streams',
          longDescription:
            'Hosted, fully managed Apache Kafka as a service for a scalable, high-performing messaging backbone',
          url: 'https://cloud.ibm.com/catalog/services/event-streams',
          translationId: 'eventstreams',
        },
        {
          name: 'IBM MQ on Cloud',
          longDescription:
            'Enterprise messaging that simplifies and accelerates reliable and secure exchange of data',
          url: '/cloud/mq/pricing',
          translationId: 'mqcloud',
        },
        {
          name: 'Secure Gateway',
          longDescription:
            'Create a secure, persistent connection between your protected environment and the cloud',
          url: '/cloud/secure-gateway/pricing',
          translationId: 'securegate',
        },
        {
          name: 'IBM Lift',
          longDescription:
            'Migrate your data quickly, easily and securely from your on-premises data source to an IBM Cloud data property',
          url: 'https://cloud.ibm.com/catalog/services/lift-cli',
          translationId: 'lift',
        },
        {
          name: 'IBM Cloud for Skytap Solutions',
          longDescription:
            'Replicate the complete data center environment of existing apps to ease migration to the cloud.',
          url: 'https://cloud.ibm.com/catalog/services/skytap-on-ibm-cloud',
          translationId: 'skytap',
        },
      ],
    },
  ],
};
