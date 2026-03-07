import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "免責事項 — KOGEI CODE",
};

export default function DisclaimerPage() {
  return (
    <LegalLayout title="免責事項">
      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">1. 投資に関する免責</h2>
        <p>
          本ウェブサイトに掲載されている情報は、クルーザーの共同所有プログラムに関する情報提供を目的としたものであり、特定の金融商品や投資に関する勧誘・推奨を行うものではありません。
        </p>
        <p className="mt-3">
          共同所有権の取得に関する最終的なご判断は、ご自身の責任において行ってください。当社は、お客様の投資判断により生じた損害について、一切の責任を負いかねます。
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">2. 税務に関する免責</h2>
        <p>
          本ウェブサイトに掲載されている税務に関する情報（減価償却、法人名義での取得等）は、一般的な情報提供を目的としたものです。実際の税務処理は、お客様の個別の状況により異なります。
        </p>
        <p className="mt-3">
          具体的な税務判断については、税理士等の専門家にご相談ください。当社は、税務処理の結果について一切の保証を行うものではありません。
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">3. 掲載情報の正確性</h2>
        <p>
          本ウェブサイトに掲載されている情報（船舶のスペック、価格、サービス内容等）は、掲載時点のものであり、予告なく変更される場合があります。
        </p>
        <p className="mt-3">
          当社は、掲載情報の正確性・完全性・最新性について最善の努力を払いますが、その内容を保証するものではありません。掲載情報に基づいて生じた損害について、当社は一切の責任を負いかねます。
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">4. 画像・映像について</h2>
        <p>
          本ウェブサイトに使用されている画像・映像には、イメージ画像が含まれます。実際の船舶・内装・体験内容は、掲載されている画像・映像と異なる場合があります。
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">5. 外部リンクについて</h2>
        <p>
          本ウェブサイトから外部のウェブサイトへのリンクが含まれる場合、リンク先の内容について当社は一切の責任を負いません。
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">6. サービスの中断・変更</h2>
        <p>
          当社は、システムの保守・点検、天災地変、その他やむを得ない事由により、予告なくサービスを中断・変更する場合があります。これにより生じた損害について、当社は一切の責任を負いかねます。
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">7. 準拠法・管轄</h2>
        <p>
          本免責事項の解釈は日本法に準拠するものとし、紛争が生じた場合は東京地方裁判所を第一審の専属的合意管轄裁判所とします。
        </p>
      </section>

      <p className="text-xs text-white/30">制定日: 2026年3月7日</p>
    </LegalLayout>
  );
}
