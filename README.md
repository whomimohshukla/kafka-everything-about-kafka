# Kafka-README.md

# Apache Kafka README

## 📌 What is Apache Kafka?

Apache **Kafka** is a **distributed streaming platform** used to build real-time data pipelines and streaming applications. It is designed to handle **high-throughput, fault-tolerant, scalable, and low-latency** data streams.

Kafka has three main capabilities:

1. **Publish and Subscribe to streams of records** (like a messaging system).
2. **Store streams of records** in a fault-tolerant durable way.
3. **Process streams of records** in real-time.

---

## ⚡ Key Features

* High throughput for both publishing and subscribing.
* Scalable horizontally without downtime.
* Durable and fault-tolerant.
* Handles millions of events per second.
* Real-time processing support with Kafka Streams or KSQL.

---

## 🛠️ Core Components

| Component     | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| **Producer**  | Sends data (events/messages) to Kafka topics.                                |
| **Consumer**  | Reads data from Kafka topics.                                                |
| **Broker**    | Kafka server that stores and serves messages.                                |
| **Topic**     | A category or feed name where messages are published.                        |
| **Partition** | A topic can be split into partitions for scalability and parallelism.        |
| **ZooKeeper** | Manages Kafka cluster metadata and leader election (soon replaced by KRaft). |

---

## 📈 Use Cases

1. **Messaging System** – Decoupling microservices.
2. **Real-Time Data Streaming** – Live analytics dashboards.
3. **Event Sourcing** – Rebuild system state from events.
4. **Log Aggregation** – Centralized logging for monitoring.
5. **Metrics Collection & Monitoring** – Aggregating system metrics.
6. **ETL / Data Integration** – Streaming data between databases and warehouses.
7. **Website Activity Tracking** – Clickstream analysis for personalization.
8. **IoT / Sensor Data Streaming** – Processing sensor events in real-time.

---

## 🏗️ Kafka Architecture Diagram

```
          +---------------------+
          |     Producers       |
          | (Microservices,     |
          |  IoT devices, logs)|
          +---------+-----------+
                    |
                    v
          +---------------------+
          |       Kafka         |
          |      Broker(s)      |
          |---------------------|
          |  Topic1  |  Topic2  |
          | Partition| Partition|
          +----------+----------+
            |          |
      +-----+--+   +---+-----+
      |Consumer|   |Consumer |
      |Service1|   |Service2 |
      +--------+   +---------+
```

* Producers send messages to **Kafka topics**.
* Topics are divided into **partitions** for scalability.
* Consumers subscribe to topics to process data in **real-time**.
* Kafka can store messages **durably** for replay.

---

## 💡 Why Use Kafka?

* **High Throughput:** Millions of messages per second.
* **Scalable:** Add brokers to scale horizontally.
* **Durable:** Data is replicated and stored on disk.
* **Fault-Tolerant:** Handles node failures without data loss.
* **Real-Time Processing:** Works with Kafka Streams or Apache Flink/Spark.

---

## 🔧 Getting Started

1. **Install Kafka:**

```bash
# Download Kafka
wget https://downloads.apache.org/kafka/3.6.1/kafka_2.13-3.6.1.tgz
tar -xvzf kafka_2.13-3.6.1.tgz
cd kafka_2.13-3.6.1
```

2. **Start ZooKeeper:**

```bash
bin/zookeeper-server-start.sh config/zookeeper.properties
```

3. **Start Kafka Broker:**

```bash
bin/kafka-server-start.sh config/server.properties
```

4. **Create a Topic:**

```bash
bin/kafka-topics.sh --create --topic my-topic --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1
```

5. **Produce Messages:**

```bash
bin/kafka-console-producer.sh --topic my-topic --bootstrap-server localhost:9092
```

6. **Consume Messages:**

```bash
bin/kafka-console-consumer.sh --topic my-topic --from-beginning --bootstrap-server localhost:9092
```

---

## 🔗 References

* [Official Apache Kafka Website](https://kafka.apache.org/)
* [Kafka Documentation](https://kafka.apache.org/documentation/)
* [Kafka Use Cases](https://kafka.apache.org/usecases)
