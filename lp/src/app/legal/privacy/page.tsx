import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "プライバシーポリシー — KOGEI CODE",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="プライバシーポリシー">
      <p>
        KOGEI CODE（以下「当社」）は、お客様の個人情報の保護を重要な責務と考え、以下のとおりプライバシーポリシーを定め、適切な取り扱いに努めます。
      </p>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">1. 個人情報の定義</h2>
        <p>
          本ポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、氏名、メールアドレス、電話番号、会社名等、特定の個人を識別できるものをいいます。
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">2. 個人情報の収集</h2>
        <p>
          当社は、お問い合わせフォーム、ブリーフィング予約等を通じて、以下の個人情報を収集する場合があります。
        </p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-white/50">
          <li>氏名</li>
          <li>メールアドレス</li>
          <li>電話番号</li>
          <li>会社名・法人名</li>
          <li>ご紹介者に関する情報</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">3. 個人情報の利用目的</h2>
        <p>収集した個人情報は、以下の目的に利用いたします。</p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-white/50">
          <li>お問い合わせへの回答・対応</li>
          <li>プライベートブリーフィングのご案内・日程調整</li>
          <li>サービスに関する情報提供</li>
          <li>サービス改善のための統計・分析（個人を特定しない形式）</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">4. 個人情報の第三者提供</h2>
        <p>
          当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。ただし、以下の場合を除きます。
        </p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-white/50">
          <li>法令に基づく場合</li>
          <li>人の生命・身体・財産の保護に必要な場合</li>
          <li>公衆衛生・児童の健全育成に必要な場合</li>
          <li>国の機関等への協力が必要な場合</li>
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">5. 個人情報の安全管理</h2>
        <p>
          当社は、個人情報の漏洩・紛失・毀損等を防止するため、適切な安全管理措置を講じます。また、個人情報を取り扱う従業者に対し、適切な監督を行います。
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">6. 個人情報の開示・訂正・削除</h2>
        <p>
          お客様は、当社が保有するご自身の個人情報について、開示・訂正・削除を請求することができます。請求を受けた場合は、本人確認の上、合理的な範囲内で速やかに対応いたします。
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">7. Cookie の使用</h2>
        <p>
          本ウェブサイトでは、利便性向上やアクセス解析のため Cookie を使用する場合があります。Cookie の使用を希望されない場合は、ブラウザの設定により無効にすることができます。
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">8. ポリシーの改定</h2>
        <p>
          当社は、法令の変更やサービス内容の変更に伴い、本ポリシーを改定することがあります。改定した場合は、本ページにて公表いたします。
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-base font-medium text-white/80">9. お問い合わせ窓口</h2>
        <p>
          個人情報の取り扱いに関するお問い合わせは、本ウェブサイトのお問い合わせフォームよりご連絡ください。
        </p>
      </section>

      <p className="text-xs text-white/30">制定日: 2026年3月7日</p>
    </LegalLayout>
  );
}
